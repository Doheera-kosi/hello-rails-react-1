class CreateGreetings < ActiveRecord::Migration[7.0]
  def change
    create_table :greetings do |t|
      t.string :message
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
