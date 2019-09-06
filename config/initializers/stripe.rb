Rails.configuration.stripe do |config|
  config.publishable_key = 'pk_test_Okp6mq2W0Ttopccq3HFOy5zC'
  config.secret_key = 'sk_test_30kbW7W8ql8cfpVseTZYcSPq'

end

Stripe.api_key = Rails.configuration.stripe.secret_key
