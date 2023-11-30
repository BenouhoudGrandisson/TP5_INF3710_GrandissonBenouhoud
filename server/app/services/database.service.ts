import { injectable } from "inversify";
import * as pg from "pg";
import "reflect-metadata";

@injectable()
export class DatabaseService {
  
  public connectionConfig: pg.ConnectionConfig = {
    // TODO Ce serait cool d'avoir des variables d'environnement pour la BD mais Node ne semble pas les aimer
    user: 'medecin_specialiste',
    database: 'hopital_bd',
    password: 'CQUoiLeStep',
    host: process.env.DATABASE_HOST ?? 'localhost',
    port: Number(process.env.DATABASE_PORT) || 5432,
    keepAlive: true,
  };

  public pool: pg.Pool = new pg.Pool(this.connectionConfig);

  public async getAllSpecialties(): Promise<pg.QueryResult> {
    return await this.pool.query("SELECT DISTINCT specialite FROM medecins");
  }

  public async getAllServices(): Promise<pg.QueryResult> {
    return await this.pool.query("SELECT * FROM services");
  }

  public async getAllMedecins(): Promise<pg.QueryResult> {
    return await this.pool.query(`SELECT idmedecin, medecins.prenom, medecins.nom, medecins.specialite, medecins.anneesExperience, services.nomService 
                                  FROM medecins INNER JOIN services 
                                  ON medecins.idService = services.idService`);

  }

  public async getMedecin(id: string): Promise<pg.QueryResult> {
    return await this.pool.query(`SELECT medecins.prenom, medecins.nom, medecins.specialite, medecins.anneesExperience, services.nomService 
                                  FROM medecins INNER JOIN services 
                                  ON medecins.idService = services.idService 
                                  WHERE medecins.idMedecin = $1`, [id]);
  }

}
