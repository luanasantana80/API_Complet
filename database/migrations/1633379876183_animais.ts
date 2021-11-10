import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Animais extends BaseSchema {
  protected tableName = 'animais'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('ambientes_id').unsigned()
      table.foreign('ambientes_id').references('id').inTable('ambientes')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
