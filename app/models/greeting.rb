class Greeting < ApplicationRecord
  belongs_to :user

  validates :message, presence: true, uniqueness: true
end
