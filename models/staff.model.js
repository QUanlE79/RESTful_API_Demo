import db from "../utils/db.js";
export default {
   
      findAll() {
        return db("staff");
      },
  
      async findById(id) {
        const list = await db("staff").where(staff_id, id);
        if (list.length === 0) {
          return null;
        }
  
        return list[0];
      },
  
      add(entity) {
        return db("staff").insert(entity);
      },
  
      del(id) {
        return db("staff").where(staff_id, id).del();
      },
  
      patch(id, entity) {
        return db("staff").where(staff_id, id).update(entity);
      },
      findByUserName(username){
        return db("staff").where("username",username).first()
      }
    }
  