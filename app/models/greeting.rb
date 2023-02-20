class Greeting < ApplicationRecord
  validates :message, presence: true, uniqueness: true
end
