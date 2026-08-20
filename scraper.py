import time

def main():
    while True:
        print("Playwright worker running", flush=True)
        time.sleep(5)

if __name__ == "__main__":
    main()
