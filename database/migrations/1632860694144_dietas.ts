import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Dietas extends BaseSchema {
  protected tableName = 'dietas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      //criação de tabelas abaixo
      table.increments('id')
      table.string('name')
      //criação de tabelas a cima

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
