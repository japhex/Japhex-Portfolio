class Post < ActiveRecord::Base
  has_many :comments, :order => "created_at DESC"
end
