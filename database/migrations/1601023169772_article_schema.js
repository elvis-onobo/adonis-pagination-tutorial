'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArticleSchema extends Schema {
  up () {
    this.create('articles', (table) => {
      table.increments()
      table.string("article_title")
      table.text('article_body')
      table.string('article_image')
      table.timestamps()
    })
  }

  down () {
    this.drop('articles')
  }
}

module.exports = ArticleSchema
