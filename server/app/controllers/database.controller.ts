import { Router } from "express";
import { inject, injectable } from "inversify";
import { DatabaseService } from "../services/database.service";
import Types from "../types";

@injectable()
export class DatabaseController {
  public constructor(
    // @ts-ignore -- À ENLEVER LORSQUE L'IMPLÉMENTATION EST TERMINÉE
    @inject(Types.DatabaseService) private readonly databaseService: DatabaseService
  ) {}

  public get router(): Router {
    const router: Router = Router();

    router.get("/specialties", async (req, rep) => {
      try {
        const allSpecialties = await this.databaseService.getAllSpecialties();
        rep.status(200).json(allSpecialties.rows.map(item => item.specialite));
      } catch (e) {
        rep.status(500).json({ error: e });
      }
    });

    router.get("/services", async (req, rep) => {
      try {
        const allServices = await this.databaseService.getAllServices();
        rep.status(200).json(allServices.rows.map(item => item.nomservice));
      } catch (e) {
        rep.status(500).json({ error: e });
      }
    });

    router.post("/medecins", (req, rep) => {
      // const medecin = await this.databaseService.addMedecin(req.body)
      rep.status(501).json(req.body);
    });

    router.get("/medecins", async (req, rep) => {
      // const allMedecins = await this.databaseService.getAllMedecins();
      try {
        const allMedecins = await this.databaseService.getAllMedecins();
        rep.status(200).json(allMedecins.rows);
      } catch (e) {
        rep.status(500).json({ error: e });
      }
    });

    router.get("/medecins/:id", async (req, rep) => {
      const id = req.params.id;
      try {
        const medecin = await this.databaseService.getMedecin(id);
        if (medecin.rowCount === 0) {
          rep.status(404).json({ error: "Medecin not found" });
        }
        rep.status(200).json(medecin.rows[0]);
      } catch (e) {
        rep.status(500).json({ error: e });
      }
    });

    router.delete("/medecins/:id", (req, rep) => {
      const id = req.params.id;
      // this.databaseService.deleteMedecin(id);
      rep.status(501).json({ error: 'Devs didnt code that one yet sorry', id: id});
    });

    router.patch("/medecins/:id", (req, rep) => {
      const id = req.params.id;
      // this.databaseService.updateMedecin(id, req.body);
      rep.status(501).json({ body: req.body, id: id});
    });
    return router;
  }


}
