import http from "../http-common";

class CyclonesTypesService {
  getAll() {
    return http.get("/cyclones_types");
  }
  get(id) {
    return http.get(`/cyclones_types/${id}`);
  }

  getCycloneLineProp(typeId) {
    switch (typeId) {
      case 1: //"ZP":
        return {color: "LightBlue", width: 1};
      case 2: //"Dsub":
        return {color: "Green", width: 1};
      case 3: //"Dpost":
      case 4: //"Dextra":
        return {color: "Blue", width: 1};
      case 5: //"Ddiss":
      case 6: //"DsurTerr":
        return {color: "Grey", width: 1};
      case 7: //"PT":
      case 8: //"DT":
        return {color: "Yellow", width: 2};
      case 9: //"TTM":
      case 10: //"FTT":
        return {color: "Orange", width: 3};
      case 11: //"CT":
        return {color: "Red", width: 5};
      case 12: //"CTI":
        return {color: "DarkRed", width: 7};
      case 13: //"CTII":
        return {color: "Black", width: 8};
      default:
        return {color: "Black", width: 1};
    }
  }
}

export default new CyclonesTypesService();
