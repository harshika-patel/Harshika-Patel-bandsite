export class BandSiteApi {
    constructor(apiKey) {
      this.apiKey = apiKey;
      this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
    }
  
    
    async postComment(comment) {
      try {
        const response = await axios.post(
          `${this.baseUrl}/comments?api_key=${this.apiKey}`,
          comment,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        return response.data;
      } catch (error) {
        console.error("Error posting comment:", error);
      }
    }
  
   
    async getComments() {
      try {
        const response = await axios.get(
          `${this.baseUrl}/comments?api_key=${this.apiKey}`
        );
        const comments = response.data;
        // Sort comments from newest to oldest based on timestamp
        return comments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    }
  
   
    async getShows() {
      try {
        const response = await axios.get(
          `${this.baseUrl}/showdates?api_key=${this.apiKey}`
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching shows:", error);
      }
    }
    async likeComment(commentId) {
      try {
        const response = await axios.put(`${this.baseUrl}/comments/${commentId}/like`);
        return response.data;
      } catch (error) {
        console.error('Failed to like comment', error);
      }
    }
  
    async deleteComment(commentId) {
      try {
        await axios.delete(`${this.baseUrl}/comments/${commentId}`);
        return true;
      } catch (error) {
        console.error('Failed to delete comment', error);
        return false;
      }
    }
  }
  
