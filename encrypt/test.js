const tests = [
  { text: "Hello World!", pw1: "test1234" },
  {
    text: "This is a longer sentence to verify multi-block AES encryption works correctly.",
    pw1: "correcthorsebatterystaple",
  },
  { text: "1234567890!@#$%^&*()", pw1: "symbolsRfun!" },
  { text: "🚀 Encryption works with emoji 🚀", pw1: "unicode🔐test" },
  { text: "Multi-line\nTest\nHere!", pw1: "multiline123" },
  { text: "密码加密测试", pw1: "测试密码" },
  { text: "Combining accents: café naïve jalapeño", pw1: "áéíóúüñ" },
  { text: "Edge case: empty line below\n", pw1: "edgecase" },
  { text: "Nested encryption test", pw1: "outerKey123", pw2: "innerKey456" },
  {
    text: "Complex paragraph:\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nVivamus fringilla turpis nec nulla vulputate, quis bibendum erat sodales.",
    pw1: "P@55w0rd!LongerBetter",
    pw2: "🔐SecureTwice🔑",
  },
];

async function runTests() {
  let passCount = 0;

  for (let i = 0; i < tests.length; i++) {
    const t = tests[i];
    console.log(
      `\n🔹 Test ${i + 1}: "${t.text.slice(0, 30)}${t.text.length > 30 ? "..." : ""}"`,
    );

    try {
      let enc = await encryptText(t.text, t.pw1);
      if (t.pw2) enc = await encryptText(enc, t.pw2);

      let dec = t.pw2 ? await decryptText(enc, t.pw2) : enc;
      dec = await decryptText(dec, t.pw1);

      const ok = dec === t.text;
      if (ok) {
        console.log(`✅ Passed`);
        passCount++;
      } else {
        console.log(`❌ Mismatch\nExpected: "${t.text}"\nGot:      "${dec}"`);
      }
    } catch (err) {
      console.error(`💥 Failed: ${err.message}`);
    }
  }

  console.log(`\nSummary: ${passCount}/${tests.length} tests passed.`);
}

if (typeof window !== "undefined") {
  runTests();
}

if (typeof module !== "undefined") module.exports = { runTests };
