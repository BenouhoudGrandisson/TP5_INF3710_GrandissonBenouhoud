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

    router.post("/medecins", (req, rep) => {
      // const medecin = await this.databaseService.addMedecin(req.body)
      rep.status(501).json(req.body);
    })

    router.get("/medecins", (req, rep) => {
      // const allMedecins = await this.databaseService.getAllMedecins();
      rep.status(501).json({ error: 'Devs didnt code that one yet sorry'});
    })

    router.get("/medecins/:id", (req, rep) => {
      const id = req.params.id;
      // const medecinWithId = await this.databaseService.getMedecin(id);
      rep.status(501).json({ error: 'Devs didnt code that one yet sorry', id: id});
    })

    router.delete("/medecins/:id", (req, rep) => {
      const id = req.params.id;
      // this.databaseService.deleteMedecin(id);
      rep.status(501).json({ error: 'Devs didnt code that one yet sorry', id: id});
    })

    router.patch("/medecins/:id", (req, rep) => {
      const id = req.params.id;
      // this.databaseService.updateMedecin(id, req.body);
      rep.status(501).json({ body: req.body, id: id});
    })
    return router;
  }


}
