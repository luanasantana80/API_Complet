import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Animais extends BaseSchema {
  protected tableName = 'animais'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('cores_id').unsigned()
      table.foreign('cores_id').references('id').inTable('cores')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
