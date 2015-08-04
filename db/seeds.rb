# Seeding the random challenges via the truth seed files.

File.foreach('db/truth_seed.txt') do |truth_description|
      Question.create(truth: truth_description)
    end

