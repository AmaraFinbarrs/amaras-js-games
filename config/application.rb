require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module AmarasJsGames
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")

    # Generator Configuration
    config.generators do |g|
      g.stylesheets     false  # Skip generating stylesheets
      g.javascripts     false  # Skip generating JavaScript files
      g.helper          false  # Skip generating helper files
      g.test_framework  false  # Skip generating test files
      g.assets          false  # Skip generating asset files (stylesheets and JavaScript)
      g.jbuilder        false  # Skip generating Jbuilder views
    end
  end
end
