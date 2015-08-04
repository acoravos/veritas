class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :truth

      t.timestamps
    end
  end
end
