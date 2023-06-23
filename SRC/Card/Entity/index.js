import fs from "fs";
class Card {
  constructor() {
    this.data = JSON.parse(fs.readFileSync("./DB/to-do.json", "utf-8"));
    this.id = 0;
  }
  list() {
    try {
      const list = this.data;
      return list;
    } catch (error) {
      console.log("Ocurrió un error inesperado", error);
    }
  }
  getCard(id) {
    try {
      const ItemToGet = this.data.data.find((x) => x.id == id);
      if (ItemToGet === undefined) {
        return "Invalid ID";
      } else {
        return ItemToGet;
      }
    } catch (error) {
      console.log("Ocurrió un error inesperado", error);
    }
  }
  addCard(item) {
    try {
      this.id++;
      Object.assign(item, { id: this.id });
      this.data.data.push(item);
      return item;
    } catch (error) {
      console.log("Error inesperad", error);
    }
  }
  removeCard(id) {
    try {
      const Obj = this.data.data.find((x) => x.id == id);
      const index = this.data.data.indexOf(Obj);
      if (index == -1) {
        return false;
      }
      this.data.data.splice(index, 1);
      return true;
    } catch (error) {
      console.log("Error inesperad", error);
      return false;
    }
  }
  editItem(item, id) {
    try {
      if (this.removeCard(id) === false) {
        return "Invalid ID";
      } else {
        this.data.data.push({ ...item, id: id });
        return this.getCard(id);
      }
    } catch (error) {
      console.log("Error inesperado");
    }
  }
}

export default Card;
