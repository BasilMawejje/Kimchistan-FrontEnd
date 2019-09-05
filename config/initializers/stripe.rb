Rails.configuration.stripe do |config|
  config.publishable_key = 'pk_test_Okp6mq2W0Ttopccq3HFOy5zC' ||= Rails.application.secrets.stripe_publishable_key
  config.secret_key = 'sk_test_30kbW7W8ql8cfpVseTZYcSPq' ||= Rails.application.secrets.stripe_secret_key

end

Stripe.api_key = Rails.configuration.stripe.secret_key