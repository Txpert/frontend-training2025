// components/TestimonialCard.js
import Image from 'next/image'; // Import für den Avatar

// Erwartet Text, Autor und Avatar-URL als Props
export default function TestimonialCard({ text, author, avatarUrl }) {
  return (
    // Grundkarte mit Styling
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      {/* Platz für ein Zitat-Icon (wird später hinzugefügt) */}
      <div className="text-indigo-500 text-4xl mb-4">
        {/* Icon kommt hier */}
        "
      </div>
      {/* Testimonial Text */}
      <p className="text-gray-600 italic mb-4">"{text}"</p>
      {/* Avatar und Autor */}
      <div className="flex items-center justify-center">
        {/* Avatar Bild (wenn URL vorhanden) */}
        {avatarUrl && (
          <Image
            src={avatarUrl}
            alt={`Avatar von ${author}`}
            width={40} // Feste Breite für den Avatar
            height={40} // Feste Höhe
            className="rounded-full mr-3" // Rundes Bild, Abstand rechts
          />
        )}
        {/* Autor Name */}
        <p className="font-semibold text-gray-800">{author}</p>
      </div>
    </div>
  );
}