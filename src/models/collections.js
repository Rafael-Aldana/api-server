'use strict';

class Collection {
  constructor(model) {
    this.model = model;
  }

  async create(json) {
    try {
      const record = await this.model.create(json);
      return record;
    } catch (error) {
      console.log('Error creating in collection');
      return error;
    }
  }

  async read(id = null) {
    try {
      if (!id) {
        const records = await this.model.findAll();
        return records;
      } else {
        const record = await this.model.findByPk(id);
        return record;
      }
    } catch (error) {
      console.log('Error reading the collection');
      return console.error();
    }
  }

  async update(json, id) {
    try {
      const record = await this.model.update(json, { where: { id } });
      return record;
    } catch (error) {
      console.log('Error updating in collection');
    }
  }

  async delete(id) {
    try {
      await this.model.destroy({ where: { id } });
    } catch (error) {
      console.log('Error deleting in collection');
    }
  }
}
module.exports = Collection;








