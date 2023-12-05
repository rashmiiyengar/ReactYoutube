import React, { useState } from 'react';

const SubscribeButton = ({ channelId, isAuthenticated }) => {
  const [isSubscribed, setSubscribed] = useState(false);
  const [subscribersCount, setSubscribersCount] = useState(100); // Replace with actual subscriber count

  const handleSubscribe = async () => {
    if (isAuthenticated) {
      // Call backend API to toggle subscription status
      try {
        const response = await fetch('/api/subscribe', {
          method: isSubscribed ? 'DELETE' : 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ channelId }),
        });

        if (response.ok) {
          setSubscribed(!isSubscribed);
          setSubscribersCount(count => (isSubscribed ? count - 1 : count + 1));
        } else {
          // Handle error
        }
      } catch (error) {
        console.error('Error subscribing:', error);
      }
    } else {
      // Redirect to login or show login modal
    }
  };

  return (
    <div>
      <button onClick={handleSubscribe}>
        {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
      </button>
      <span>{subscribersCount} subscribers</span>
    </div>
  );
};

export default SubscribeButton;