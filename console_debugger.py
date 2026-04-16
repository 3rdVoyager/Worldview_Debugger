"""
Worldview Debugger - Console Edition
Simple, synchronous console program that mimics the SPA flows:
- choose worldview
- choose discipline
- analyze (simulated scan with progress)
- show detected bugs/errors
- show proposed Christian patch
- apply patch (persist status to local JSON file)
- reset session

Keep it small and dependency-free.
"""
from __future__ import annotations
import json
import os
import random
import time
from typing import Dict, List

DATA = {
    "secularism": {
        "name": "Secularism",
        "description": "This program attempts to execute high-level ethical functions like Human_Rights.exe and Objective_Justice.pkg while having deleted the core Creator.dll dependency. It relies on 'Legacy Emulation'—running on the memory of a Christian past—but because the backend server has been disconnected, the system is prone to 'Logic Ghosting' where values remain on screen but have no data supporting them in the BIOS.",
        "disciplines": [
            "Theology","Philosophy","Ethics","Biology","Psychology","Sociology","Law","Politics","Economics","History"
        ],
        "disciplineErrors": {
            "Theology": ["Denies transcendent moral grounding, leaving ethics unsupported."],
            "Philosophy": ["Elevates empirical materialism while dismissing metaphysical truth."],
            "Ethics": ["Treats morality as social preference instead of objective duty."],
            "Biology": ["Reduces human dignity to biology, undermining inherent worth."],
            "Psychology": ["Promotes self-actualization as the highest good, ignoring moral failure."],
            "Sociology": ["Prioritizes autonomy over community bonds, producing social fragmentation."],
            "Law": ["Separates law from moral law, resulting in legal positivism without guardrails."],
            "Politics": ["Assumes progress without an objective standard, risking policy drift."],
            "Economics": ["Frames economics as technocratic management rather than stewardship."],
            "History": ["Narrative of inevitable progress lacks moral criteria to judge advancement."]
        },
        "christianPatch": {
            "Theology": "God is Lord over all life and knowledge, not a private add-on.",
            "Philosophy": "Truth is coherent because reality is grounded in the Creator.",
            "Ethics": "Moral law is objective because it reflects God’s holy character.",
            "Biology": "Human beings are embodied image-bearers with irreducible dignity.",
            "Psychology": "Personhood is found in Christ, where identity and purpose are restored.",
            "Sociology": "Society flourishes when love of God and neighbor shapes institutions.",
            "Law": "Justice is measured by righteousness, mercy, and truth before God.",
            "Politics": "Government is accountable to God and limited by moral law.",
            "Economics": "Stewardship, generosity, and honesty govern the use of resources.",
            "History": "History has direction under God and culminates in Christ’s kingdom."
        },
    },
    "marxism": {
        "name": "Marxism",
        "description": "This system operates as a Totalitarian Kernel Override. It attempts to force-quit all individual user processes (Imago_Dei.user) to prioritize a single, collective system task. However, because it lacks a 'Moral Firewall,' the program is easily hijacked by 'Power_Lust' malware. It promises to optimize system resources but historically results in a 'Total System Wipe' and permanent 'Kernel Panic'.",
        "disciplines": ["Theology","Philosophy","Ethics","Biology","Psychology","Sociology","Law","Politics","Economics","History"],
        "disciplineErrors": {
            "Theology": ["Rejects personal faith as mere opiate without engaging spiritual claims."],
            "Philosophy": ["Reduces ideas to class struggle, erasing individual personhood."],
            "Ethics": ["Justifies ends by class goals, sidelining intrinsic human dignity."],
            "Biology": ["Interprets biology through class narratives, ignoring individual uniqueness."],
            "Psychology": ["Attributes behavior entirely to class position, neglecting personal responsibility."],
            "Sociology": ["Prioritizes collective identity while suppressing pluralism."],
            "Law": ["Turns law into an instrument of class power rather than protecting rights."],
            "Politics": ["Centralizes power in the state, enabling coercive solutions."],
            "Economics": ["Collectivist economics can remove incentives and accountability."],
            "History": ["Reads history only as material forces, missing moral and spiritual factors."]
        },
        "christianPatch": {
            "Theology": "God, not class conflict, is ultimate over history and judgment.",
            "Philosophy": "Reality is more than matter; persons, truth, and morality are real.",
            "Ethics": "Justice must reject oppression without excusing hatred or vengeance.",
            "Biology": "Human nature is fallen across all classes, not innocent by position.",
            "Psychology": "The heart needs repentance and renewal, not only social inversion.",
            "Sociology": "Communities are healed by reconciliation, service, and covenant faithfulness.",
            "Law": "Law should restrain evil and protect dignity without becoming tyranny.",
            "Politics": "Power must be accountable, limited, and oriented to the common good.",
            "Economics": "Work, property, generosity, and justice are held together in stewardship.",
            "History": "Human hope is not utopia by force but redemption through Christ."
        },
    },
    "postmodernism": {
        "name": "Postmodernism",
        "description": "A highly unstable build characterized by Circular Logic Recursion. The program’s primary directive is to output Error: Truth_Not_Found, but it uses an absolute truth-claim to verify that no absolute truth exists. This creates an infinite loop that eventually crashes the compiler. It refuses to map to any external hardware (Reality), insisting that the software is the only thing that exists, yet the software cannot define itself.",
        "disciplines": ["Theology","Philosophy","Ethics","Biology","Psychology","Sociology","Law","Politics","Economics","History"],
        "disciplineErrors": {
            "Theology": ["Dismantles religious claims as mere discourse without assessing truth."],
            "Philosophy": ["Rejects objective truth, making coherent debate difficult."],
            "Ethics": ["Relativizes morality so critique becomes inconsistent."],
            "Biology": ["Denies fixed biological categories needed for coherent science."],
            "Psychology": ["A decentered subject leaves no stable identity for moral responsibility."],
            "Sociology": ["Overemphasizes social construction, eroding trans-social norms."],
            "Law": ["Undermines legal universality by treating law as narrative."],
            "Politics": ["Paralyzes public reason through skepticism of shared truth."],
            "Economics": ["Treats economic systems as texts to interpret, not structures to manage."],
            "History": ["Narrows history to interpretation, denying overarching historical meaning."]
        },
        "christianPatch": {
            "Theology": "God reveals truth that stands above shifting discourse communities.",
            "Philosophy": "Objective truth exists because reality is grounded in God.",
            "Ethics": "Good and evil are real because God is holy and just.",
            "Biology": "Embodiment is a gift of creation, not a disposable construct.",
            "Psychology": "The self is unified in relationship to God and neighbor.",
            "Sociology": "Communities are called to truthful speech and covenantal love.",
            "Law": "Law can pursue justice because moral standards are not arbitrary.",
            "Politics": "Public life can seek truth and justice beyond tribal narratives.",
            "Economics": "Economic life is accountable to truth, fairness, and stewardship.",
            "History": "History has coherence in creation, fall, redemption, and restoration."
        },
    },
    "new_spirituality": {
        "name": "New Spirituality",
        "description": "This program uploads all local data to 'The Great Cloud' (Universal Consciousness) until nothing remains grounded on the physical device. It suffers from Parity Bit Mismatch—by claiming that 'All Data is One,' it loses the ability to distinguish between 'Safe' and 'Malicious' files. If everything is the same piece of code, the system can no longer identify or delete 'Sin' or 'Error' subroutines.",
        "disciplines": ["Theology","Philosophy","Ethics","Biology","Psychology","Sociology","Law","Politics","Economics","History"],
        "disciplineErrors": {
            "Theology": ["Collapses creator/creation distinction, making God impersonal."],
            "Philosophy": ["Monistic thinking conflates subject and object, hindering coherent metaphysics."],
            "Ethics": ["Karma-based ethics detaches responsibility from intentional repentance."],
            "Biology": ["Spiritualized biology downplays bodily significance and suffering."],
            "Psychology": ["Privatizes transformation into subjective feeling without community accountability."],
            "Sociology": ["Enables individualistic spirituality that bypasses institutional accountability."],
            "Law": ["Self-law replaces objective moral boundaries, leading to subjective norms."],
            "Politics": ["Emphasizes inner enlightenment over structural justice, neglecting institutions."],
            "Economics": ["Treats spiritual goods as commodities, promoting consumerized spirituality."],
            "History": ["Interprets history as spiritual progression rather than concrete events."]
        },
        "christianPatch": {
            "Theology": "God is personal, holy, and self-revealing, not an impersonal force.",
            "Philosophy": "Truth must be coherent and tested, not merely felt.",
            "Ethics": "Love and holiness define goodness beyond personal preference.",
            "Biology": "Bodies matter as created gifts, awaiting resurrection hope.",
            "Psychology": "Healing includes repentance, forgiveness, and renewed desires.",
            "Sociology": "Faith matures in accountable community, not isolated spirituality.",
            "Law": "Moral boundaries protect life, dignity, and neighbor-love.",
            "Politics": "Public life requires justice and mercy, not only private serenity.",
            "Economics": "Worship is not a commodity; stewardship resists spiritual consumerism.",
            "History": "God works in real history, culminating in Christ’s incarnation and resurrection."
        },
    },
    "islam": {
        "name": "Islam",
        "description": "A rigid, Closed-Source Architecture that requires 100% manual data entry with zero room for 'Grace' exceptions. The program keeps the user in a perpetual 'Request Pending' state, as the Server (God) never sends back an 'Access Granted' (Assurance) packet. It relies on a 'Performance-Based Ping' that never reaches the required threshold for a secure handshake, leaving the connection status as 'Indeterminate' until the system shuts down.",
        "disciplines": ["Theology","Philosophy","Ethics","Biology","Psychology","Sociology","Law","Politics","Economics","History"],
        "disciplineErrors": {
            "Theology": ["Affirms strict monotheism but lacks a trinitarian account of relational deity."],
            "Philosophy": ["Emphasizes submission and law which can obscure personal relationality."],
            "Ethics": ["Centering obedience may underdevelop assurance and grace."],
            "Biology": ["Affirms special creation but may underemphasize incarnation and bodily redemption."],
            "Psychology": ["Stresses external conformity which can limit inner assurance."],
            "Sociology": ["Strong communal identity that can marginalize dissenting voices."],
            "Law": ["Religious law can conflate religion and state, challenging pluralism."],
            "Politics": ["Theocratic tendencies risk limiting religious freedom and shared accountability."],
            "Economics": ["Communal duties are emphasized, but market mechanisms may be downplayed."],
            "History": ["Historical narratives may prioritize unity and tradition over certain contested events."]
        },
        "christianPatch": {
            "Theology": "God is one being in three persons: Father, Son, and Holy Spirit.",
            "Philosophy": "Truth is centered in Christ, where justice and mercy meet coherently.",
            "Ethics": "Obedience flows from grace, not from fear-driven self-justification.",
            "Biology": "Humanity is restored through Christ’s incarnation, death, and resurrection.",
            "Psychology": "Believers can have assurance because salvation rests on Christ’s finished work.",
            "Sociology": "The church is a reconciled people from every nation under one Lord.",
            "Law": "The law is fulfilled in Christ, who bears judgment and grants righteousness.",
            "Politics": "Earthly authority is limited under God, and conscience is accountable to Christ.",
            "Economics": "Generosity and justice flow from grace and stewardship before God.",
            "History": "The gospel stands on historical crucifixion and resurrection, not symbolic myth."
        },
    },
}

STATUS_FILE = "wv_status.json"


def load_status() -> Dict[str, Dict[str, str]]:
    if not os.path.exists(STATUS_FILE):
        return {}
    try:
        with open(STATUS_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return {}


def save_status(status: Dict[str, Dict[str, str]]) -> None:
    with open(STATUS_FILE, "w", encoding="utf-8") as f:
        json.dump(status, f, indent=2)


def clear_status() -> None:
    if os.path.exists(STATUS_FILE):
        os.remove(STATUS_FILE)


def slow_print(text: str, delay: float = 0.02) -> None:
    for ch in text:
        print(ch, end="", flush=True)
        time.sleep(delay)
    print()


def progress_bar(duration: float = 2.0) -> None:
    steps = 30
    for i in range(steps + 1):
        pct = int(i * 100 / steps)
        bar = "#" * i + "-" * (steps - i)
        print(f"\rScanning: [{bar}] {pct}%", end="", flush=True)
        time.sleep(duration / steps)
    print()


def choose_worldview() -> str:
    keys = list(DATA.keys())
    print("Available worldviews:")
    for i, k in enumerate(keys, 1):
        print(f"  {i}. {DATA[k]['name']} ({k})")
    while True:
        choice = input("Select worldview number (or 'q' to quit): ").strip()
        if choice.lower() == "q":
            raise SystemExit
        if not choice.isdigit():
            print("Enter a number.")
            continue
        idx = int(choice) - 1
        if 0 <= idx < len(keys):
            return keys[idx]
        print("Invalid selection.")


def choose_discipline(worldview_key: str) -> str:
    w = DATA[worldview_key]
    print(f"Disciplines in {w['name']}:")
    for i, d in enumerate(w["disciplines"], 1):
        print(f"  {i}. {d}")
    while True:
        choice = input("Select discipline number (or 'b' back): ").strip()
        if choice.lower() == "b":
            return ""
        if not choice.isdigit():
            print("Enter a number.")
            continue
        idx = int(choice) - 1
        if 0 <= idx < len(w["disciplines"]):
            return w["disciplines"][idx]
        print("Invalid selection.")


def analyze(worldview_key: str, discipline: str) -> None:
    print()
    slow_print(f"Analyzing {discipline} in {DATA[worldview_key]['name']}...")
    duration = random.uniform(1.2, 2.6)
    progress_bar(duration)
    # Mark partial (not persisted here, user can apply)
    errors = DATA[worldview_key].get("disciplineErrors", {}).get(discipline, [])
    if errors:
        print("Detected issues:")
        for e in errors:
            print(f" - {e}")
    else:
        print("No explicit errors detected. System-level drift suspected.")
    patch = DATA[worldview_key].get("christianPatch", {}).get(discipline)
    print()
    if patch:
        print("Proposed Christian Patch:")
        slow_print(patch, delay=0.01)
    else:
        print("No automated patch available for this discipline.")


def apply_patch(status: Dict[str, Dict[str, str]], worldview_key: str, discipline: str) -> None:
    status.setdefault(worldview_key, {})[discipline] = "fixed"
    save_status(status)
    print(f"Applied patch to {discipline}. Status saved.")


def show_status(status: Dict[str, Dict[str, str]], worldview_key: str) -> None:
    w = DATA[worldview_key]
    print(f"Status for {w['name']}:")
    for d in w["disciplines"]:
        st = status.get(worldview_key, {}).get(d, "unscanned")
        print(f" - {d}: {st}")


def main_loop() -> None:
    status = load_status()
    print("Worldview Debugger - Console (simple)")
    while True:
        try:
            wkey = choose_worldview()
        except SystemExit:
            print("Exiting.")
            return
        while True:
            print("\nOptions: [s]elect discipline, [v]iew status, [r]eset session, [b]ack, [q]uit")
            cmd = input("cmd> ").strip().lower()
            if cmd == "q":
                print("Goodbye.")
                return
            if cmd == "b":
                break
            if cmd == "r":
                confirm = input("Clear saved status (y/N)? ").strip().lower()
                if confirm == "y":
                    clear_status()
                    status = {}
                    print("Status cleared.")
                continue
            if cmd == "v":
                show_status(status, wkey)
                continue
            if cmd == "s":
                d = choose_discipline(wkey)
                if not d:
                    continue
                analyze(wkey, d)
                while True:
                    action = input("[a]pply patch, [b]ack: ").strip().lower()
                    if action == "b":
                        break
                    if action == "a":
                        apply_patch(status, wkey, d)
                        break
                    print("Unknown command.")
                continue
            print("Unknown command.")


if __name__ == "__main__":
    main_loop()
