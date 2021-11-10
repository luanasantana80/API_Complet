import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Animais extends BaseSchema {
  protected tableName = 'animais'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('reino_animal_id').unsigned()
      table.foreign('reino_animal_id').references('id').inTable('reinoanimals')
      table.integer('dietas_id').unsigned()
      table.foreign('dietas_id').references('id').inTable('dietas')
      table.integer('especies_id').unsigned()
      table.foreign('especies_id').references('id').inTable('especies')
      table.integer('ambientes_id').unsigned()
      table.foreign('ambientes_id').references('id').inTable('ambientes')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
