import http from "../http-common";
class CyclonesService {
  getAllInSeason(seasonId) {
    return http.get(`/cyclones/${seasonId}`);
  }
  getOne(seasonId, cycloneId) {
    return http.get(`/cyclones/${seasonId}/${cycloneId}`);
  }
  getDetails(cycloneId) {
    console.log(`get /details/${cycloneId}`);
    return http.get(`/details/${cycloneId}`);
  }
}
export default new CyclonesService();
