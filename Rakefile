desc "Check code quality"
task :jshint do
  test_file = File.expand_path('getScripts.js')
  system("jshint file://#{test_file}")
end

task :test do
  test_file = File.expand_path('test.html')
  system("phantomjs test/run-qunit.js file://#{test_file}")
end

task :default => :test
