atom_feed :language => 'en-US' do |feed|
  feed.title @title
  feed.updated @updated

  @news_items.each do |item|
    next if item.updated_at.blank?
    feed.entry( item ) do |entry|
      entry.title item.title
      entry.content item.content, :type => 'html'
      entry.updated(item.updated_at.strftime("%Y-%m-%dT%H:%M:%SZ")) 
    end
  end
end