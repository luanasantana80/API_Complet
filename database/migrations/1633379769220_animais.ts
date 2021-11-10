import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Animais extends BaseSchema {
  protected tableName = 'animais'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('dietas_id').unsigned()
      table.foreign('dietas_id').references('id').inTable('dietas')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
