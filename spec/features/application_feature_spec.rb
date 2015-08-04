require 'rails_helper'

describe 'As I user I can', :js => true do
  # before(:each)

  it 'visit the homepage' do
    visit '/'
    expect(page).to have_selector 'div.HomePage'
  end

end