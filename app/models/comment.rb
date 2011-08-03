class Comment < ActiveRecord::Base
  belongs_to :post
  before_create :validate
  
  def validate
    if comment.include?('viagra') || name.include?('viagra') || email.include?('viagra') ||comment.include?('Viagra') || name.include?('Viagra') || email.include?('Viagra') || comment.include?('VIAGRA') || name.include?('VIAGRA') || email.include?('VIAGRA')
      return false
    end 
  end
end
