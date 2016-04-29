This is a GitBook plugin to allow embedding a markdown inside a HTML block-level element.

## Example

TBD 


## How to embed a markdown inside block-level element

You can embed a markdown inside a new block-level element with the use of tag:

```
{% div style="display:none" %}

Insert markdown content here.

{% enddiv %}
```

An open-tag should be  `{% div ... %}` and close-tag should be `{% enddiv %}`  . Attributes are processed as you wrote.
