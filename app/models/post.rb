class Post < ActiveRecord::Base
  has_many :comments, :order => "created_at DESC"
  accepts_nested_attributes_for :comments, :reject_if => lambda {|a| a[:content].blank?}, :allow_destroy => true
  has_friendly_id :title, :use_slug => true
end
