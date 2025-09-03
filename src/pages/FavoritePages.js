export default function Favorites() {
  // Dummy favorite posts
  const favorites = [
    { id: 1, title: "Best Meme Ever", thumbnail: "https://picsum.photos/300/200?random=10" },
    { id: 2, title: "Morning Motivation", thumbnail: "https://picsum.photos/300/200?random=11" },
    { id: 3, title: "Workout Tips", thumbnail: "https://picsum.photos/300/200?random=12" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Favorites</h1>

      {/* Grid of favorite posts */}
      {favorites.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {favorites.map((fav) => (
            <div
              key={fav.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition p-3"
            >
              <img
                src={fav.thumbnail}
                alt={fav.title}
                className="w-full h-40 object-cover rounded-xl"
              />
              <h2 className="mt-3 font-semibold text-gray-800">{fav.title}</h2>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No favorites yet.</p>
      )}
    </div>
  );
}
// 3. Favorites
// function FavoritePages() {
//   const saved = [
//     { id: 1, title: "Saved Funny Script", folder: "Funny" },
//     { id: 2, title: "Motivation Quote", folder: "Motivation" },
//   ];

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Favorites (Script Vault)</h2>
//       <div className="grid grid-cols-2 gap-4">
//         {saved.map((item) => (
//           <Card key={item.id}>
//             <CardContent className="p-4">
//               <h3 className="font-semibold">{item.title}</h3>
//               <p className="text-sm text-gray-500">Folder: {item.folder}</p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }