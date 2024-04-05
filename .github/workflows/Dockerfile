# Use an appropriate base image
FROM nginx:alpine

# Remove the default Nginx configuration file
RUN rm -rf /etc/nginx/conf.d/*

# Copy your web code (assuming it's in the 'dist' directory) into the Nginx web root directory
COPY dist/ /usr/share/nginx/html

# Expose port 80 to allow external access
EXPOSE 80

# Start Nginx server when the container starts
CMD ["nginx", "-g", "daemon off;"]
