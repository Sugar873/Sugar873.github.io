source "https://rubygems.org"

gem "jekyll", "~> 4.3.3"
gem "minima", "~> 2.5"
gem "jekyll-theme-slate"
gem "csv" # Add this line
gem "base64" # Add this line
gem 'wdm', '>= 0.1.0' if Gem.win_platform? && RUBY_VERSION < '3.0' && ENV['JEKYLL_ENV'] != 'production'

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
end

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]