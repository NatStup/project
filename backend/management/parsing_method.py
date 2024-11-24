import inspect
from importlib.util import spec_from_file_location, module_from_spec

from backend.parsers.promote_budget_gov import PromoteBudgetGovParser


PARSERS = [
    PromoteBudgetGovParser,
]


def main():
    for parser in PARSERS:
        parser().scrape_pages()


if __name__ == '__main__':
    main()
