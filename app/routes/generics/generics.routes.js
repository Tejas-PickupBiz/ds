import express from "express";
import Controllers from "../../controller/index.js";

const generic = express.Router();

// gender routes

generic.get("/gender/all", Controllers.GenderController.getGender);
generic.post("/gender/create", Controllers.GenderController.createGender);
generic.put("/gender/update/:id", Controllers.GenderController.updateGender);
generic.delete("/gender/delete/:id", Controllers.GenderController.deleteGender);
generic.get("/gender/:id", Controllers.GenderController.getGenderById);

// religion routes

generic.get("/religion/all", Controllers.ReligionController.getReligion);
generic.post("/religion/create", Controllers.ReligionController.createReligion);
generic.put(
  "/religion/update/:id",
  Controllers.ReligionController.updateReligion,
);
generic.delete(
  "/religion/delete/:id",
  Controllers.ReligionController.deleteReligion,
);
generic.get("/religion/:id", Controllers.ReligionController.getReligionById);

//caste routes

generic.get("/caste/all", Controllers.CasteController.getCaste);
generic.post("/caste/create", Controllers.CasteController.createCaste);
generic.put("/caste/update/:id", Controllers.CasteController.updateCaste);
generic.delete("/caste/delete/:id", Controllers.CasteController.deleteCaste);
generic.get("/caste/:id", Controllers.CasteController.getCasteById);

//blood routes

generic.get("/blood/all", Controllers.BloodController.getBloodGroup);
generic.post("/blood/create", Controllers.BloodController.createBloodGroup);
generic.put("/blood/update/:id", Controllers.BloodController.updateBloodGroup);
generic.delete(
  "/blood/delete/:id",
  Controllers.BloodController.deleteBloodGroup,
);
generic.get("/blood/:id", Controllers.BloodController.getBloodGroupById);

//subject routes
generic.get("/subject/all", Controllers.SubjectController.getSubject);
generic.post("/subject/create", Controllers.SubjectController.createSubject);
generic.put("/subject/update/:id", Controllers.SubjectController.updateSubject);
generic.delete(
  "/subject/delete/:id",
  Controllers.SubjectController.deleteSubject,
);
generic.get("/subject/:id", Controllers.SubjectController.getSubjectById);

//section routes

generic.get("/section/all", Controllers.SectionController.getSection);
generic.post("/section/create", Controllers.SectionController.createSection);
generic.put("/section/update/:id", Controllers.SectionController.updateSection);
generic.delete(
  "/section/delete/:id",
  Controllers.SectionController.deleteSection,
);
generic.get("/section/:id", Controllers.SectionController.getSectionById);

//classes routes
generic.get("/class/all", Controllers.ClassesController.getClass);
generic.post("/class/create", Controllers.ClassesController.createClass);
generic.put("/class/update/:id", Controllers.ClassesController.updateClass);
generic.delete("/class/delete/:id", Controllers.ClassesController.deleteClass);
generic.get("/class/:id", Controllers.ClassesController.getClassById);

export default generic;
