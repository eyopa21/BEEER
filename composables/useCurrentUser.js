export default function () {
  return useState("data", () => {
    return {
      
      isVerified: null,
      id: null,
      currentUser: null,
      
    };
  });
}
