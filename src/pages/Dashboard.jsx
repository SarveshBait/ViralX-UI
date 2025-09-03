// 4. Competitor Dashboard
function Dashboard() {
  const competitors = [
    { id: 1, title: "Influencer A Reel", likes: 1200, views: 5000, shares: 300 },
    { id: 2, title: "Influencer B Reel", likes: 800, views: 3000, shares: 150 },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Competitor Dashboard</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Reel</th>
            <th className="p-2 border">Likes</th>
            <th className="p-2 border">Views</th>
            <th className="p-2 border">Shares</th>
          </tr>
        </thead>
        <tbody>
          {competitors.map((c) => (
            <tr key={c.id}>
              <td className="p-2 border">{c.title}</td>
              <td className="p-2 border">{c.likes}</td>
              <td className="p-2 border">{c.views}</td>
              <td className="p-2 border">{c.shares}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}