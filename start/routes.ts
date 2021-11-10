/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})
//Reino Animal GET POST PUT DELETE/DESTROY GET/ID
Route.get('/reino-animal', 'ReinoanimalsController.index')
Route.post('/reino-animal', 'ReinoanimalsController.store')
Route.put('/reino-animal/:id', 'ReinoanimalsController.store')
Route.delete('/reino-animal/:id', 'ReinoanimalsController.destroy')
Route.get('/reino-animal/:id', 'Reinoanimals.getById')
//Animais GET POST PUT DELETE/DESTROY GET/ID
Route.get('/animais', 'AnimaisController.index')
Route.post('/animais', 'AnimaisController.store')
Route.put('/animais/:id', 'AnimaisController.store')
Route.delete('/animais/:id', 'AnimaisController.destroy')
Route.get('/animais/:id', 'AnimaisController.getById')
//Especies GET POST PUT DELETE/DESTROY GET/ID
Route.get('/especies', 'EspeciesController.index')
Route.post('/especies', 'EspeciesController.store')
Route.put('/especies/:id', 'EspeciesController.store')
Route.delete('/especies/:id', 'EspeciesController.destroy')
Route.get('/especies/:id', 'EspeciesController.getById')
//Dietas GET POST PUT DELETE/DESTROY GET/ID
Route.get('/dietas', 'DietasController.index')
Route.post('/dietas', 'DietasController.store')
Route.put('/dietas/:id', 'DietasController.store')
Route.delete('/dietas/:id', 'DietasController.destroy')
Route.get('/dietas/:id', 'DietasController.getById')
//Ambientes GET POST PUT DELETE/DESTROY GET/ID
Route.get('/ambientes', 'AmbientesController.index')
Route.post('/ambientes', 'AmbientesController.store')
Route.put('/ambientes/:id', 'AmbientesController.store')
Route.delete('/ambientes/:id', 'AmbientesController.destroy')
Route.get('/ambientes/:id', 'AmbientesController.getById')
//Cores GET POST PUT DELETE/DESTROY GET/ID
Route.get('/cores', 'CoresController.index')
Route.post('/cores', 'CoresController.store')
Route.put('/cores/:id', 'CoresController.store')
Route.delete('/cores/:id', 'CoresController.destroy')
Route.get('/cores/:id', 'CoresController.getById')
