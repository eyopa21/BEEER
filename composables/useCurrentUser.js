export default function () {
  return useState("currentUser", () => {
    return {
      
      isVerified: null,
      id: null,
      currentUser: null,
      
    };
  });
}
