import Realm from "realm";

const realm=null;

async function quickStart() {
     realm = await Realm.open({
      path: "myrealm",
      schema: [TaskSchema],
    });
}

export default {realm};