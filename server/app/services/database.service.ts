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
    return await this.pool.query(`SELECT idmedecin as id, medecins.prenom as firstname, medecins.nom as lastname, medecins.specialite as specialty, medecins.anneesExperience as experience, services.nomService as service
                                  FROM medecins INNER JOIN services 
                                  ON medecins.idService = services.idService`);

  }

  public async getMedecin(id: string): Promise<pg.QueryResult> {
    return await this.pool.query(`SELECT medecins.prenom as firstname, medecins.nom as lastname, medecins.specialite as specialty, medecins.anneesExperience as experience, services.nomService as service
                                  FROM medecins INNER JOIN services 
                                  ON medecins.idService = services.idService 
                                  WHERE medecins.idMedecin = $1`, [id]);
  }

  public async addMedecin(medecin: {
    firstname: string,
    lastname: string, 
    specialty: string,
    experience: number,
    service: string
  }): Promise<pg.QueryResult> {
    try {
      const serviceQuery = await this.pool.query(`SELECT idService FROM services WHERE nomService = $1`, [medecin.service]);
      const idService = serviceQuery.rows[0].idservice;
      
      const queryGetMaxIdMedecin = `SELECT MAX(idmedecin) FROM medecins`;
      const maxIdMedecin = await this.pool.query(queryGetMaxIdMedecin);
      const newMedecinId = maxIdMedecin.rows[0].max + 1;

      const insertQuery = `
        INSERT INTO medecins (idmedecin, prenom, nom, specialite, anneesExperience, idService)
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING *
      `;

      return await this.pool.query(insertQuery, [newMedecinId, medecin.firstname, medecin.lastname, medecin.specialty, medecin.experience, idService]);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  public async deleteMedecin(id: string): Promise<pg.QueryResult> {
    try {
      const queryDeleteMedecin = `DELETE FROM medecins WHERE idmedecin = $1`;
      return await this.pool.query(queryDeleteMedecin, [id]);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  public async updateMedecin(id: string, medecin: {
    firstname: string,
    lastname: string,
    specialty: string,
    experience: number,
    service: string
  }): Promise<pg.QueryResult> {
    try {
      const serviceQuery = await this.pool.query(`SELECT idService FROM services WHERE nomService = $1`, [medecin.service]);
      const idService = serviceQuery.rows[0].idservice;

      const queryUpdateMedecin = `
        UPDATE medecins SET prenom = $1, nom = $2, specialite = $3, anneesExperience = $4, idService = $5
        WHERE idmedecin = $6
      `;
      return await this.pool.query(queryUpdateMedecin, [medecin.firstname, medecin.lastname, medecin.specialty, medecin.experience, idService, id]);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
