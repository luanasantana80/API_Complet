import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Animais extends BaseSchema {
  protected tableName = 'animais'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('especies_id').unsigned()
      table.foreign('especies_id').references('id').inTable('especies')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
