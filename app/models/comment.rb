class Comment < ActiveRecord::Base
  belongs_to :post
  before_create :validate
  
  def validate
    if comment.include?('viagra') || name.include?('viagra') || email.include?('viagra')
      return false
    end 
  end
end
