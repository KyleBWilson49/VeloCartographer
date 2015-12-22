json.array! @routes do |route|
  json.route_path route.route_path
  json.route_name route.route_name
  json.route_description route.route_description
  json.route_id route.id 
end
