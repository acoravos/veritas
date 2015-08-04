class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :question_id
      t.string :author
      t.text :comment

      t.timestamps
    end
  end
end
