// app/page.tsx
export default function HomePage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>☕ Cafu Coffee</h1>
      <p>Next.js + App Router çalışıyor.</p>
    </main>
  );
}

// Main page component assembling various sections
// Each section is imported from the components/sections directory
// The sections include Hero, FeaturedItems, MenuTeaser, HoursAndLocation, and InstagramStrip
// This structure allows for easy maintenance and updates to individual sections  
// The Home component is the default export for the page
// The layout is designed to be responsive and visually appealing
// Note: Replace placeholder content in each section with actual data as needed
// Ensure that images and links in each section are correctly set up