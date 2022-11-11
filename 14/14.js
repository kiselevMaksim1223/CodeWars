function colorOf(r, g, b) {
   //coding here
   if (r < 16) {
      r1 = "0" + r.toString(16)
   } else r1 = r.toString(16)

   if (g < 16) {
      g1 = "0" + g.toString(16)
   } else g1 = g.toString(16)

   if (b < 16) {
      b1 = "0" + b.toString(16)
   } else b1 = b.toString(16)

   return "#" + r1 + g1 + b1
}