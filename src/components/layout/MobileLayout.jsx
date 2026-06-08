import React from "react";

function MobileLayout({ children }) {
  return (
    <main className="app-shell">
      <section className="phone-frame" aria-label="PickMate mobile app">
        {children}
      </section>
    </main>
  );
}

export default MobileLayout;
