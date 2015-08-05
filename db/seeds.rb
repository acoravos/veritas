# Seeding the random challenges via the truth seed files.

File.foreach('db/truth_seed.txt') do |truth_description|
      Question.create(truth: truth_description)
    end

Comment.create(question_id: "1", text: "Taylor Swift", author: "Andrea Coravos")
Comment.create(question_id: "1", text: "Kanye West", author: "Fred Ehrsam")
Comment.create(question_id: "1", text: "Abraham Lincoln", author: "Cassie Coravos")

Comment.create(question_id: "2", text: "No way. I like roaming airports incognito", author: "Andrea Coravos")
Comment.create(question_id: "2", text: "No, but can't stop it. Won't stop it.", author: "Fred Ehrsam")
Comment.create(question_id: "2", text: "No one will ever find me. I'm hiding in a rickshaw and driving it across India.", author: "Cassie Coravos")
